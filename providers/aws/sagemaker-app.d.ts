import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerAppConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#app_name SagemakerApp#app_name}.
     */
    readonly appName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#app_type SagemakerApp#app_type}.
     */
    readonly appType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#domain_id SagemakerApp#domain_id}.
     */
    readonly domainId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#tags SagemakerApp#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#tags_all SagemakerApp#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#user_profile_name SagemakerApp#user_profile_name}.
     */
    readonly userProfileName: string;
    /**
     * resource_spec block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#resource_spec SagemakerApp#resource_spec}
     */
    readonly resourceSpec?: SagemakerAppResourceSpec[];
}
export interface SagemakerAppResourceSpec {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#instance_type SagemakerApp#instance_type}.
     */
    readonly instanceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html#sagemaker_image_arn SagemakerApp#sagemaker_image_arn}.
     */
    readonly sagemakerImageArn?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html aws_sagemaker_app}.
 */
export declare class SagemakerApp extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_app.html aws_sagemaker_app} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: SagemakerAppConfig);
    private _appName;
    get appName(): string;
    set appName(value: string);
    get appNameInput(): string;
    private _appType;
    get appType(): string;
    set appType(value: string);
    get appTypeInput(): string;
    get arn(): string;
    private _domainId;
    get domainId(): string;
    set domainId(value: string);
    get domainIdInput(): string;
    get id(): string;
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
    private _userProfileName;
    get userProfileName(): string;
    set userProfileName(value: string);
    get userProfileNameInput(): string;
    private _resourceSpec?;
    get resourceSpec(): SagemakerAppResourceSpec[];
    set resourceSpec(value: SagemakerAppResourceSpec[]);
    resetResourceSpec(): void;
    get resourceSpecInput(): SagemakerAppResourceSpec[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
