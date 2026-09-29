# Stage 1: Build the application (Upgraded to Java 21)
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copy the pom.xml and source code
COPY pom.xml .
COPY src ./src

# Build the application package and skip tests for speed
RUN mvn clean package -DskipTests

# Stage 2: Run the application (Upgraded to Java 21 runtime)
FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# Copy the built JAR from the previous stage
COPY --from=build /app/target/*.jar app.jar

# Expose the standard Spring Boot port
EXPOSE 8080

# Configure Indian Standard Time (IST) directly in the container
ENV TZ=Asia/Kolkata

# Start the application
ENTRYPOINT ["java", "-jar", "app.jar"]
