import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_tag_mutability EcrRepository#image_tag_mutability}.
     */
    readonly imageTagMutability?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#name EcrRepository#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags EcrRepository#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#tags_all EcrRepository#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * encryption_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_configuration EcrRepository#encryption_configuration}
     */
    readonly encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[];
    /**
     * image_scanning_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#image_scanning_configuration EcrRepository#image_scanning_configuration}
     */
    readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#timeouts EcrRepository#timeouts}
     */
    readonly timeouts?: EcrRepositoryTimeouts;
}
export interface EcrRepositoryEncryptionConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#encryption_type EcrRepository#encryption_type}.
     */
    readonly encryptionType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#kms_key EcrRepository#kms_key}.
     */
    readonly kmsKey?: string;
}
export interface EcrRepositoryImageScanningConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#scan_on_push EcrRepository#scan_on_push}.
     */
    readonly scanOnPush: boolean;
}
export interface EcrRepositoryTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html#delete EcrRepository#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository}.
 */
export declare class EcrRepository extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecr_repository.html aws_ecr_repository} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: EcrRepositoryConfig);
    get arn(): string;
    get id(): string;
    private _imageTagMutability?;
    get imageTagMutability(): string;
    set imageTagMutability(value: string);
    resetImageTagMutability(): void;
    get imageTagMutabilityInput(): string | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get registryId(): string;
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
    private _encryptionConfiguration?;
    get encryptionConfiguration(): EcrRepositoryEncryptionConfiguration[];
    set encryptionConfiguration(value: EcrRepositoryEncryptionConfiguration[]);
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): EcrRepositoryEncryptionConfiguration[] | undefined;
    private _imageScanningConfiguration?;
    get imageScanningConfiguration(): EcrRepositoryImageScanningConfiguration[];
    set imageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration[]);
    resetImageScanningConfiguration(): void;
    get imageScanningConfigurationInput(): EcrRepositoryImageScanningConfiguration[] | undefined;
    private _timeouts?;
    get timeouts(): EcrRepositoryTimeouts;
    set timeouts(value: EcrRepositoryTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): EcrRepositoryTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
