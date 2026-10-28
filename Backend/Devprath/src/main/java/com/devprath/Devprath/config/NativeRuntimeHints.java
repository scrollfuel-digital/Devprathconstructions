package com.devprath.Devprath.config;

import com.devprath.Devprath.dtos.*;
import com.devprath.Devprath.entity.Blog;
import com.devprath.Devprath.entity.Contact;
import org.hibernate.bytecode.internal.bytebuddy.BytecodeProviderImpl;
import org.springframework.aot.hint.MemberCategory;
import org.springframework.aot.hint.RuntimeHints;
import org.springframework.aot.hint.RuntimeHintsRegistrar;

public class NativeRuntimeHints implements RuntimeHintsRegistrar {

    @Override
    public void registerHints(RuntimeHints hints, ClassLoader classLoader) {
        // 1. Hibernate BytecodeProvider reflection (fixes MissingReflectionRegistrationError on DB operations)
        hints.reflection().registerType(
                BytecodeProviderImpl.class,
                MemberCategory.INVOKE_DECLARED_CONSTRUCTORS,
                MemberCategory.INVOKE_PUBLIC_METHODS
        );

        // 2. Cloudinary HTTP5 strategies (loaded dynamically via reflection by Cloudinary SDK)
        registerTypeByName(hints, "com.cloudinary.http5.UploaderStrategy");
        registerTypeByName(hints, "com.cloudinary.http5.ApiStrategy");
        registerTypeByName(hints, "com.cloudinary.Cloudinary");

        // 3. Cloudflare Turnstile classes & DTOs
        registerTypeByName(hints, "com.digitalsanctuary.cf.turnstile.dto.TurnstileResponse");
        registerTypeByName(hints, "com.digitalsanctuary.cf.turnstile.dto.ValidationResult");
        registerTypeByName(hints, "com.digitalsanctuary.cf.turnstile.dto.ValidationResult$ValidationResultType");
        registerTypeByName(hints, "com.digitalsanctuary.cf.turnstile.config.TurnstileConfigProperties");
        registerTypeByName(hints, "com.digitalsanctuary.cf.turnstile.config.TurnstileConfigProperties$Metrics");
        registerTypeByName(hints, "com.digitalsanctuary.cf.turnstile.service.TurnstileValidationService");

        // 4. Application DTOs (ensures complete Jackson serialization/deserialization)
        Class<?>[] appClasses = {
                BlogRequestDto.class,
                BlogResponseDto.class,
                CloudinaryUploadResponse.class,
                ContactCreateResponseDto.class,
                ContactRequestDto.class,
                ContactResponseDto.class,
                ErrorResponseDto.class,
                LoginRequestDto.class,
                LoginResponseDto.class,
                PageResponse.class,
                Blog.class,
                Contact.class
        };

        for (Class<?> clazz : appClasses) {
            hints.reflection().registerType(clazz,
                    MemberCategory.INVOKE_DECLARED_CONSTRUCTORS,
                    MemberCategory.INVOKE_PUBLIC_METHODS,
                    MemberCategory.ACCESS_DECLARED_FIELDS
            );
        }
    }

    private void registerTypeByName(RuntimeHints hints, String className) {
        try {
            Class<?> clazz = Class.forName(className);
            hints.reflection().registerType(clazz,
                    MemberCategory.INVOKE_DECLARED_CONSTRUCTORS,
                    MemberCategory.INVOKE_PUBLIC_METHODS,
                    MemberCategory.ACCESS_DECLARED_FIELDS
            );
        } catch (ClassNotFoundException ignored) {
            // Class might not be present in specific profiles/environments
        }
    }
}


/*

**Yes, it will work on the other PC** because Docker provides the exact same Linux build environment regardless of the machine. 

> [!IMPORTANT]
> **RAM Requirement**: GraalVM native image compilation needs high memory. Ensure Docker on that PC has at least **6 GB to 8 GB RAM** allocated (in Docker Desktop -> Settings -> Resources).

---

### Step-by-Step Instructions

1. **Unzip and open terminal** inside the project folder:
   ```bash
   cd Devprath
   ```

2. **Log in to Docker Hub**:
   ```bash
   docker login
   ```
   *(Enter your username `scrollfuel` and password/token)*

3. **Build the native Docker image**:
   ```bash
   docker build -f Dockerfile.native -t scrollfuel/devprath-backend:v5 .
   ```
   *(This takes ~3–8 minutes as GraalVM compiles the binary)*

4. **Push the image to Docker Hub**:
   ```bash
   docker push scrollfuel/devprath-backend:v5
   ```

5. *(Optional)* **Run and test locally**:
   ```bash
   docker run -p 8080:8080 scrollfuel/devprath-backend:v5
   ```

 */