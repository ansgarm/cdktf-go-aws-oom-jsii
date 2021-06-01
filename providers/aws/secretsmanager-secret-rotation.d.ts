import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretsmanagerSecretRotationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}.
     */
    readonly rotationLambdaArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#secret_id SecretsmanagerSecretRotation#secret_id}.
     */
    readonly secretId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#tags SecretsmanagerSecretRotation#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * rotation_rules block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#rotation_rules SecretsmanagerSecretRotation#rotation_rules}
     */
    readonly rotationRules: SecretsmanagerSecretRotationRotationRules[];
}
export interface SecretsmanagerSecretRotationRotationRules {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}.
     */
    readonly automaticallyAfterDays: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation}.
 */
export declare class SecretsmanagerSecretRotation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SecretsmanagerSecretRotationConfig);
    get id(): string;
    get rotationEnabled(): boolean;
    private _rotationLambdaArn;
    get rotationLambdaArn(): string;
    set rotationLambdaArn(value: string);
    get rotationLambdaArnInput(): string;
    private _secretId;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _rotationRules;
    get rotationRules(): SecretsmanagerSecretRotationRotationRules[];
    set rotationRules(value: SecretsmanagerSecretRotationRotationRules[]);
    get rotationRulesInput(): SecretsmanagerSecretRotationRotationRules[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
