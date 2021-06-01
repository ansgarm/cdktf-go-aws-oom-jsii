import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamRoleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html#name DataAwsIamRole#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html#tags DataAwsIamRole#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html aws_iam_role}.
 */
export declare class DataAwsIamRole extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_role.html aws_iam_role} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsIamRoleConfig);
    get arn(): string;
    get assumeRolePolicy(): string;
    get createDate(): string;
    get description(): string;
    get id(): string;
    get maxSessionDuration(): number;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    get uniqueId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
