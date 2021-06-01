import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#alias DirectoryServiceDirectory#alias}.
     */
    readonly alias?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#description DirectoryServiceDirectory#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#edition DirectoryServiceDirectory#edition}.
     */
    readonly edition?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#enable_sso DirectoryServiceDirectory#enable_sso}.
     */
    readonly enableSso?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#name DirectoryServiceDirectory#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#password DirectoryServiceDirectory#password}.
     */
    readonly password: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#short_name DirectoryServiceDirectory#short_name}.
     */
    readonly shortName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#size DirectoryServiceDirectory#size}.
     */
    readonly size?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#tags DirectoryServiceDirectory#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#tags_all DirectoryServiceDirectory#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#type DirectoryServiceDirectory#type}.
     */
    readonly type?: string;
    /**
     * connect_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#connect_settings DirectoryServiceDirectory#connect_settings}
     */
    readonly connectSettings?: DirectoryServiceDirectoryConnectSettings[];
    /**
     * vpc_settings block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_settings DirectoryServiceDirectory#vpc_settings}
     */
    readonly vpcSettings?: DirectoryServiceDirectoryVpcSettings[];
}
export interface DirectoryServiceDirectoryConnectSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#customer_dns_ips DirectoryServiceDirectory#customer_dns_ips}.
     */
    readonly customerDnsIps: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#customer_username DirectoryServiceDirectory#customer_username}.
     */
    readonly customerUsername: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#subnet_ids DirectoryServiceDirectory#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_id DirectoryServiceDirectory#vpc_id}.
     */
    readonly vpcId: string;
}
export interface DirectoryServiceDirectoryVpcSettings {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#subnet_ids DirectoryServiceDirectory#subnet_ids}.
     */
    readonly subnetIds: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html#vpc_id DirectoryServiceDirectory#vpc_id}.
     */
    readonly vpcId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory}.
 */
export declare class DirectoryServiceDirectory extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_directory.html aws_directory_service_directory} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DirectoryServiceDirectoryConfig);
    get accessUrl(): string;
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get dnsIpAddresses(): string[];
    private _edition?;
    get edition(): string;
    set edition(value: string);
    resetEdition(): void;
    get editionInput(): string | undefined;
    private _enableSso?;
    get enableSso(): boolean;
    set enableSso(value: boolean);
    resetEnableSso(): void;
    get enableSsoInput(): boolean | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _password;
    get password(): string;
    set password(value: string);
    get passwordInput(): string;
    get securityGroupId(): string;
    private _shortName?;
    get shortName(): string;
    set shortName(value: string);
    resetShortName(): void;
    get shortNameInput(): string | undefined;
    private _size?;
    get size(): string;
    set size(value: string);
    resetSize(): void;
    get sizeInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _connectSettings?;
    get connectSettings(): DirectoryServiceDirectoryConnectSettings[];
    set connectSettings(value: DirectoryServiceDirectoryConnectSettings[]);
    resetConnectSettings(): void;
    get connectSettingsInput(): DirectoryServiceDirectoryConnectSettings[] | undefined;
    private _vpcSettings?;
    get vpcSettings(): DirectoryServiceDirectoryVpcSettings[];
    set vpcSettings(value: DirectoryServiceDirectoryVpcSettings[]);
    resetVpcSettings(): void;
    get vpcSettingsInput(): DirectoryServiceDirectoryVpcSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
