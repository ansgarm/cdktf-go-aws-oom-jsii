import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbSubnetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#description DbSubnetGroup#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#name DbSubnetGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#name_prefix DbSubnetGroup#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#subnet_ids DbSubnetGroup#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#tags DbSubnetGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html#tags_all DbSubnetGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html aws_db_subnet_group}.
 */
export declare class DbSubnetGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_subnet_group.html aws_db_subnet_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbSubnetGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _subnetIds;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
