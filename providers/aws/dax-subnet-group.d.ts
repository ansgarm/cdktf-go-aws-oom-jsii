import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DaxSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html#description DaxSubnetGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html#name DaxSubnetGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html#subnet_ids DaxSubnetGroup#subnet_ids}.
     */
    readonly subnetIds: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html aws_dax_subnet_group}.
 */
export declare class DaxSubnetGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dax_subnet_group.html aws_dax_subnet_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DaxSubnetGroupConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _subnetIds;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
