import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamInstanceProfileConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_instance_profile.html#name DataAwsIamInstanceProfile#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_instance_profile.html aws_iam_instance_profile}.
 */
export declare class DataAwsIamInstanceProfile extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_instance_profile.html aws_iam_instance_profile} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsIamInstanceProfileConfig);
    get arn(): string;
    get createDate(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get path(): string;
    get roleArn(): string;
    get roleId(): string;
    get roleName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
