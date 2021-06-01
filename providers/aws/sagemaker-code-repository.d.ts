import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerCodeRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#code_repository_name SagemakerCodeRepository#code_repository_name}.
     */
    readonly codeRepositoryName: string;
    /**
     * git_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#git_config SagemakerCodeRepository#git_config}
     */
    readonly gitConfig: SagemakerCodeRepositoryGitConfig[];
}
export interface SagemakerCodeRepositoryGitConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#branch SagemakerCodeRepository#branch}.
     */
    readonly branch?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#repository_url SagemakerCodeRepository#repository_url}.
     */
    readonly repositoryUrl: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#secret_arn SagemakerCodeRepository#secret_arn}.
     */
    readonly secretArn?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository}.
 */
export declare class SagemakerCodeRepository extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SagemakerCodeRepositoryConfig);
    get arn(): string;
    private _codeRepositoryName;
    get codeRepositoryName(): string;
    set codeRepositoryName(value: string);
    get codeRepositoryNameInput(): string;
    get id(): string;
    private _gitConfig;
    get gitConfig(): SagemakerCodeRepositoryGitConfig[];
    set gitConfig(value: SagemakerCodeRepositoryGitConfig[]);
    get gitConfigInput(): SagemakerCodeRepositoryGitConfig[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
