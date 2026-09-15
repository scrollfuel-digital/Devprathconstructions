# Stage 1: Build native executable
FROM ghcr.io/graalvm/native-image-community:25.0.2 AS build

WORKDIR /app

COPY . .

RUN chmod +x mvnw
RUN ./mvnw -Pnative native:compile -DskipTests

# Stage 2: Run native executable
FROM debian:bookworm-slim

WORKDIR /app

COPY --from=build /app/target/Devprath /app/app

EXPOSE 8080

ENTRYPOINT ["./app"]
# # Stage 1: Build application with Maven
# FROM eclipse-temurin:21-jdk-alpine AS build
# WORKDIR /app
#
# # Copy maven wrapper and pom.xml to cache dependencies
# COPY .mvn/ .mvn/
# COPY mvnw pom.xml ./
# RUN chmod +x mvnw && ./mvnw dependency:go-offline -B
#
# # Copy source code and package the JAR
# COPY src ./src
# RUN ./mvnw clean package -DskipTests -B
#
# # Stage 2: Lightweight runtime image
# FROM eclipse-temurin:21-jre-alpine
# WORKDIR /app
#
# # Run as non-root user for security
# RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# USER appuser
#
# # Copy the built JAR from the builder stage
# COPY --from=build /app/target/*.jar app.jar
#
# # Render provides the PORT environment variable
# EXPOSE 8080
#
# ENTRYPOINT ["java", "-jar", "app.jar"]