import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbOptionGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#engine_name DbOptionGroup#engine_name}.
     */
    readonly engineName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#major_engine_version DbOptionGroup#major_engine_version}.
     */
    readonly majorEngineVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name DbOptionGroup#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name_prefix DbOptionGroup#name_prefix}.
     */
    readonly namePrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_group_description DbOptionGroup#option_group_description}.
     */
    readonly optionGroupDescription?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#tags DbOptionGroup#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#tags_all DbOptionGroup#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * option block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option DbOptionGroup#option}
     */
    readonly option?: DbOptionGroupOption[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#timeouts DbOptionGroup#timeouts}
     */
    readonly timeouts?: DbOptionGroupTimeouts;
}
export interface DbOptionGroupOptionOptionSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#name DbOptionGroup#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#value DbOptionGroup#value}.
     */
    readonly value: string;
}
export interface DbOptionGroupOption {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#db_security_group_memberships DbOptionGroup#db_security_group_memberships}.
     */
    readonly dbSecurityGroupMemberships?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_name DbOptionGroup#option_name}.
     */
    readonly optionName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#port DbOptionGroup#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#version DbOptionGroup#version}.
     */
    readonly version?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}.
     */
    readonly vpcSecurityGroupMemberships?: string[];
    /**
     * option_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#option_settings DbOptionGroup#option_settings}
     */
    readonly optionSettings?: DbOptionGroupOptionOptionSettings[];
}
export interface DbOptionGroupTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html#delete DbOptionGroup#delete}.
     */
    readonly delete?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group}.
 */
export declare class DbOptionGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_option_group.html aws_db_option_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbOptionGroupConfig);
    get arn(): string;
    private _engineName;
    get engineName(): string;
    set engineName(value: string);
    get engineNameInput(): string;
    get id(): string;
    private _majorEngineVersion;
    get majorEngineVersion(): string;
    set majorEngineVersion(value: string);
    get majorEngineVersionInput(): string;
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
    private _optionGroupDescription?;
    get optionGroupDescription(): string;
    set optionGroupDescription(value: string);
    resetOptionGroupDescription(): void;
    get optionGroupDescriptionInput(): string | undefined;
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
    private _option?;
    get option(): DbOptionGroupOption[];
    set option(value: DbOptionGroupOption[]);
    resetOption(): void;
    get optionInput(): DbOptionGroupOption[] | undefined;
    private _timeouts?;
    get timeouts(): DbOptionGroupTimeouts;
    set timeouts(value: DbOptionGroupTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DbOptionGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
