# Migrating from Terraform to NovaServe

This guide maps HashiCorp Terraform concepts to NovaServe and provides a recommended migration strategy.

---

## Concept Mapping Matrix

| Terraform (HCL) Concept | NovaServe (TypeScript) Concept | Key Difference |
| :--- | :--- | :--- |
| `resource "aws_s3_bucket"` | `export const uploads = storage("user-uploads")` | Application-defined in TypeScript |
| `resource "aws_sqs_queue"` | `export const taskQueue = queue("task-processing")` | Unified with application handlers |
| `resource "aws_iam_policy"` | **Automated AST IAM Synthesis** | Zero manual IAM JSON required |
| `terraform.tfstate` | `.nova/state.json` (SHA-256 Lock) | Cryptographically hashed state |
| `terraform plan` | `nova plan --target aws` | Sub-second AST compilation diff |
| `terraform apply` | `nova deploy --target aws` | Deterministic deployment execution |

---

## Recommended Migration Strategy

1. **Keep Existing Network/VPC Layer in Terraform**: Leave core VPC, DNS records, and static gateways managed by Terraform.
2. **Scaffold NovaServe App**: Initialize NovaServe for application-level resources (APIs, Lambda functions, S3 buckets, SQS queues).
3. **Reference Existing ARN Outputs**: Inject existing Terraform VPC subnet IDs or database connection strings via environment variables into `App.ts`.
4. **Decommission Duplicate HCL**: Gradually replace application-level HCL files with `App.ts` declarations.
