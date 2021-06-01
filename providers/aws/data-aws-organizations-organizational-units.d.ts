import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOrganizationsOrganizationalUnitsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html#parent_id DataAwsOrganizationsOrganizationalUnits#parent_id}.
     */
    readonly parentId: string;
}
export declare class DataAwsOrganizationsOrganizationalUnitsChildren extends cdktf.ComplexComputedList {
    get arn(): string;
    get id(): string;
    get name(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html aws_organizations_organizational_units}.
 */
export declare class DataAwsOrganizationsOrganizationalUnits extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/organizations_organizational_units.html aws_organizations_organizational_units} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsOrganizationsOrganizationalUnitsConfig);
    children(index: string): DataAwsOrganizationsOrganizationalUnitsChildren;
    get id(): string;
    private _parentId;
    get parentId(): string;
    set parentId(value: string);
    get parentIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
