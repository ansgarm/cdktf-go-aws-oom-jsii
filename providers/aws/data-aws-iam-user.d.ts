import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamUserConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html#tags DataAwsIamUser#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html#user_name DataAwsIamUser#user_name}.
     */
    readonly userName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html aws_iam_user}.
 */
export declare class DataAwsIamUser extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_user.html aws_iam_user} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsIamUserConfig);
    get arn(): string;
    get id(): string;
    get path(): string;
    get permissionsBoundary(): string;
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
    get userId(): string;
    private _userName;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
