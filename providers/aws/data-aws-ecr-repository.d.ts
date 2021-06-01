import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcrRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html#name DataAwsEcrRepository#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html#registry_id DataAwsEcrRepository#registry_id}.
     */
    readonly registryId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html#tags DataAwsEcrRepository#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsEcrRepositoryEncryptionConfiguration extends cdktf.ComplexComputedList {
    get encryptionType(): string;
    get kmsKey(): string;
}
export declare class DataAwsEcrRepositoryImageScanningConfiguration extends cdktf.ComplexComputedList {
    get scanOnPush(): boolean;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html aws_ecr_repository}.
 */
export declare class DataAwsEcrRepository extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_repository.html aws_ecr_repository} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsEcrRepositoryConfig);
    get arn(): string;
    encryptionConfiguration(index: string): DataAwsEcrRepositoryEncryptionConfiguration;
    get id(): string;
    imageScanningConfiguration(index: string): DataAwsEcrRepositoryImageScanningConfiguration;
    get imageTagMutability(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _registryId?;
    get registryId(): string;
    set registryId(value: string);
    resetRegistryId(): void;
    get registryIdInput(): string | undefined;
    get repositoryUrl(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
