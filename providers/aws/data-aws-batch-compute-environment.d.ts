import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html#compute_environment_name DataAwsBatchComputeEnvironment#compute_environment_name}.
     */
    readonly computeEnvironmentName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html#tags DataAwsBatchComputeEnvironment#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html aws_batch_compute_environment}.
 */
export declare class DataAwsBatchComputeEnvironment extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/batch_compute_environment.html aws_batch_compute_environment} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsBatchComputeEnvironmentConfig);
    get arn(): string;
    private _computeEnvironmentName;
    get computeEnvironmentName(): string;
    set computeEnvironmentName(value: string);
    get computeEnvironmentNameInput(): string;
    get ecsClusterArn(): string;
    get id(): string;
    get serviceRole(): string;
    get state(): string;
    get status(): string;
    get statusReason(): string;
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
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
