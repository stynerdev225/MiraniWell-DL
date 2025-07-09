# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible
for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

Please report (suspected) security vulnerabilities to **your.email@example.com**.
You will receive a response from us within 48 hours. If the issue is confirmed,
we will release a patch as soon as possible depending on complexity but
historically within a few days.

## Security Best Practices

When using this application, please follow these security best practices:

1. **Environment Variables**: Never commit sensitive environment variables to version control
2. **Authentication**: Use strong passwords and enable two-factor authentication where available
3. **Database**: Ensure your database is properly secured and not publicly accessible
4. **HTTPS**: Always use HTTPS in production environments
5. **Updates**: Keep all dependencies up to date to avoid known vulnerabilities

## Security Updates

Security updates will be announced in the following ways:

- GitHub Security Advisories
- Release notes with security tags
- Email notifications to maintainers

## Responsible Disclosure

We believe in responsible disclosure of security vulnerabilities. Please:

1. Give us reasonable time to fix the issue before making it public
2. Provide detailed information about the vulnerability
3. Don't exploit the vulnerability beyond what's necessary to demonstrate it
4. Don't access or modify data belonging to others

Thank you for helping keep our project secure!
