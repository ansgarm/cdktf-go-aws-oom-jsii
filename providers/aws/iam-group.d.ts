import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group.html#name IamGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iam_group.html#path IamGroup#path}.
     */
    readonly path?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_group.html aws_iam_group}.
 */
export declare class IamGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_group.html aws_iam_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IamGroupConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    get uniqueId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
