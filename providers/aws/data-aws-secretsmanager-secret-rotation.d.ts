import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecretsmanagerSecretRotationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation.html#secret_id DataAwsSecretsmanagerSecretRotation#secret_id}.
     */
    readonly secretId: string;
}
export declare class DataAwsSecretsmanagerSecretRotationRotationRules extends cdktf.ComplexComputedList {
    get automaticallyAfterDays(): number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation}.
 */
export declare class DataAwsSecretsmanagerSecretRotation extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretRotationConfig);
    get id(): string;
    get rotationEnabled(): boolean;
    get rotationLambdaArn(): string;
    rotationRules(index: string): DataAwsSecretsmanagerSecretRotationRotationRules;
    private _secretId;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
