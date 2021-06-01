import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationsOrganizationalUnitConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#name OrganizationsOrganizationalUnit#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#parent_id OrganizationsOrganizationalUnit#parent_id}.
     */
    readonly parentId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#tags OrganizationsOrganizationalUnit#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html#tags_all OrganizationsOrganizationalUnit#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export declare class OrganizationsOrganizationalUnitAccounts extends cdktf.ComplexComputedList {
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html aws_organizations_organizational_unit}.
 */
export declare class OrganizationsOrganizationalUnit extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/organizations_organizational_unit.html aws_organizations_organizational_unit} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: OrganizationsOrganizationalUnitConfig);
    accounts(index: string): OrganizationsOrganizationalUnitAccounts;
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parentId;
    get parentId(): string;
    set parentId(value: string);
    get parentIdInput(): string;
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
