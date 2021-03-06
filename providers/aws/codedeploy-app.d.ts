import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodedeployAppConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#compute_platform CodedeployApp#compute_platform}.
     */
    readonly computePlatform?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#name CodedeployApp#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#tags CodedeployApp#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#tags_all CodedeployApp#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html aws_codedeploy_app}.
 */
export declare class CodedeployApp extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html aws_codedeploy_app} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodedeployAppConfig);
    get applicationId(): string;
    get arn(): string;
    private _computePlatform?;
    get computePlatform(): string;
    set computePlatform(value: string);
    resetComputePlatform(): void;
    get computePlatformInput(): string | undefined;
    get githubAccountName(): string;
    get id(): string;
    get linkedToGithub(): boolean;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
