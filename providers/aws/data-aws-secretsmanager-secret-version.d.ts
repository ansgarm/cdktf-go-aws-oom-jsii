import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html#secret_id DataAwsSecretsmanagerSecretVersion#secret_id}.
     */
    readonly secretId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html#version_id DataAwsSecretsmanagerSecretVersion#version_id}.
     */
    readonly versionId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html#version_stage DataAwsSecretsmanagerSecretVersion#version_stage}.
     */
    readonly versionStage?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html aws_secretsmanager_secret_version}.
 */
export declare class DataAwsSecretsmanagerSecretVersion extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html aws_secretsmanager_secret_version} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretVersionConfig);
    get arn(): string;
    get id(): string;
    get secretBinary(): string;
    private _secretId;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string;
    get secretString(): string;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    private _versionStage?;
    get versionStage(): string;
    set versionStage(value: string);
    resetVersionStage(): void;
    get versionStageInput(): string | undefined;
    get versionStages(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
