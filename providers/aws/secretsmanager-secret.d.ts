import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretsmanagerSecretConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#description SecretsmanagerSecret#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#kms_key_id SecretsmanagerSecret#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#name SecretsmanagerSecret#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#name_prefix SecretsmanagerSecret#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#policy SecretsmanagerSecret#policy}.
     */
    readonly policy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}.
     */
    readonly recoveryWindowInDays?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}.
     */
    readonly rotationLambdaArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#tags SecretsmanagerSecret#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#tags_all SecretsmanagerSecret#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * rotation_rules block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#rotation_rules SecretsmanagerSecret#rotation_rules}
     */
    readonly rotationRules?: SecretsmanagerSecretRotationRules[];
}
export interface SecretsmanagerSecretRotationRules {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#automatically_after_days SecretsmanagerSecret#automatically_after_days}.
     */
    readonly automaticallyAfterDays: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html aws_secretsmanager_secret}.
 */
export declare class SecretsmanagerSecret extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html aws_secretsmanager_secret} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: SecretsmanagerSecretConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _recoveryWindowInDays?;
    get recoveryWindowInDays(): number;
    set recoveryWindowInDays(value: number);
    resetRecoveryWindowInDays(): void;
    get recoveryWindowInDaysInput(): number | undefined;
    get rotationEnabled(): boolean;
    private _rotationLambdaArn?;
    get rotationLambdaArn(): string;
    set rotationLambdaArn(value: string);
    resetRotationLambdaArn(): void;
    get rotationLambdaArnInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _rotationRules?;
    get rotationRules(): SecretsmanagerSecretRotationRules[];
    set rotationRules(value: SecretsmanagerSecretRotationRules[]);
    resetRotationRules(): void;
    get rotationRulesInput(): SecretsmanagerSecretRotationRules[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
