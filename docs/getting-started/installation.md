# Installation & System Requirements

This guide covers installing the `novaserve` global CLI binary and configuring your system environment.

---

## System Requirements

Before installing NovaServe, ensure your system meets the following prerequisites:

- **Node.js**: `v18.0.0` or higher (Node.js 20+ LTS recommended)
- **Package Manager**: `npm` v9+, `pnpm` v8+, or `yarn` v3+
- **TypeScript**: `v5.0.0` or higher in your project codebase
- **Operating System**: macOS (Intel/Apple Silicon), Linux (x86_64/arm64), or Windows (WSL2 recommended)

---

## Global CLI Installation

Install the official `novaserve` CLI globally using `npm`:

```bash
npm install -g novaserve
```

Verify that the CLI is installed and accessible in your shell `$PATH`:

```bash
nova --version
```

**Expected Output:**
```text
novaserve v2.1.6 (x86_64-apple-darwin)
```

---

## Project Dependency Installation

If adding NovaServe to an existing TypeScript project, install the runtime library as a project dependency:

```bash
npm install novaserve@2.1.6
```

---

## Cloud Provider Credentials Setup

NovaServe executes deployments by calling cloud provider APIs directly. Set up your environment variables for your target providers:

### 1. Amazon Web Services (AWS)

Set standard AWS credential environment variables in your terminal or `.env` file:

```bash
export AWS_ACCESS_KEY_ID="AKIAXXXXXXXXXXXXXXXX"
export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
export AWS_REGION="us-east-1"
```

Alternatively, NovaServe automatically respects existing credentials configured via `aws configure` (`~/.aws/credentials`).

### 2. Cloudflare Edge

Set your Cloudflare API token and Account ID:

```bash
export CLOUDFLARE_API_TOKEN="v-9X4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
export CLOUDFLARE_ACCOUNT_ID="8f3aXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

### 3. Local Docker Development

Ensure Docker Desktop or `dockerd` is running on your workstation if building container images or using local container emulation.

---

## Verifying Environment Readiness

Run `nova doctor` to verify that your Node.js runtime, CLI binary, and cloud provider credentials are properly configured:

```bash
nova doctor
```

**Expected Output:**
```text
[✓] Node.js Environment: v20.11.0
[✓] NovaServe CLI Binary: v2.1.6
[✓] TypeScript Runtime: v5.7.3
[✓] AWS Target Credentials: Valid (Account: 123456789012, Region: us-east-1)
[✓] Cloudflare Target Token: Valid (Account ID: 8f3a...)
[✓] Docker Engine: Running (v24.0.7)

Environment ready for compilation and deployment.
```

---

## Next Steps

- Proceed to the [Quickstart](quickstart.md) tutorial to scaffold your first NovaServe application.
