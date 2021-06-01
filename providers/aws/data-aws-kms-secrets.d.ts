import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKmsSecretsConfig extends cdktf.TerraformMetaArguments {
    /**
     * secret block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#secret DataAwsKmsSecrets#secret}
     */
    readonly secret: DataAwsKmsSecretsSecret[];
}
export interface DataAwsKmsSecretsSecret {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#context DataAwsKmsSecrets#context}.
     */
    readonly context?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#grant_tokens DataAwsKmsSecrets#grant_tokens}.
     */
    readonly grantTokens?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#name DataAwsKmsSecrets#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html#payload DataAwsKmsSecrets#payload}.
     */
    readonly payload: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html aws_kms_secrets}.
 */
export declare class DataAwsKmsSecrets extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_secrets.html aws_kms_secrets} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsKmsSecretsConfig);
    get id(): string;
    plaintext(key: string): string;
    private _secret;
    get secret(): DataAwsKmsSecretsSecret[];
    set secret(value: DataAwsKmsSecretsSecret[]);
    get secretInput(): DataAwsKmsSecretsSecret[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
