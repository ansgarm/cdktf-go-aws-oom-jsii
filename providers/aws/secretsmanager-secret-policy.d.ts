import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretsmanagerSecretPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html#block_public_policy SecretsmanagerSecretPolicy#block_public_policy}.
     */
    readonly blockPublicPolicy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html#policy SecretsmanagerSecretPolicy#policy}.
     */
    readonly policy: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html#secret_arn SecretsmanagerSecretPolicy#secret_arn}.
     */
    readonly secretArn: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html aws_secretsmanager_secret_policy}.
 */
export declare class SecretsmanagerSecretPolicy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html aws_secretsmanager_secret_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SecretsmanagerSecretPolicyConfig);
    private _blockPublicPolicy?;
    get blockPublicPolicy(): boolean;
    set blockPublicPolicy(value: boolean);
    resetBlockPublicPolicy(): void;
    get blockPublicPolicyInput(): boolean | undefined;
    get id(): string;
    private _policy;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _secretArn;
    get secretArn(): string;
    set secretArn(value: string);
    get secretArnInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
