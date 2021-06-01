import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksStackConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#agent_version OpsworksStack#agent_version}.
     */
    readonly agentVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#berkshelf_version OpsworksStack#berkshelf_version}.
     */
    readonly berkshelfVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#color OpsworksStack#color}.
     */
    readonly color?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#configuration_manager_name OpsworksStack#configuration_manager_name}.
     */
    readonly configurationManagerName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#configuration_manager_version OpsworksStack#configuration_manager_version}.
     */
    readonly configurationManagerVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#custom_json OpsworksStack#custom_json}.
     */
    readonly customJson?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_availability_zone OpsworksStack#default_availability_zone}.
     */
    readonly defaultAvailabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_instance_profile_arn OpsworksStack#default_instance_profile_arn}.
     */
    readonly defaultInstanceProfileArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_os OpsworksStack#default_os}.
     */
    readonly defaultOs?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_root_device_type OpsworksStack#default_root_device_type}.
     */
    readonly defaultRootDeviceType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_ssh_key_name OpsworksStack#default_ssh_key_name}.
     */
    readonly defaultSshKeyName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#default_subnet_id OpsworksStack#default_subnet_id}.
     */
    readonly defaultSubnetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#hostname_theme OpsworksStack#hostname_theme}.
     */
    readonly hostnameTheme?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#manage_berkshelf OpsworksStack#manage_berkshelf}.
     */
    readonly manageBerkshelf?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#name OpsworksStack#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#region OpsworksStack#region}.
     */
    readonly region: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#service_role_arn OpsworksStack#service_role_arn}.
     */
    readonly serviceRoleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#tags OpsworksStack#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#tags_all OpsworksStack#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#use_custom_cookbooks OpsworksStack#use_custom_cookbooks}.
     */
    readonly useCustomCookbooks?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#use_opsworks_security_groups OpsworksStack#use_opsworks_security_groups}.
     */
    readonly useOpsworksSecurityGroups?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#vpc_id OpsworksStack#vpc_id}.
     */
    readonly vpcId?: string;
    /**
     * custom_cookbooks_source block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#custom_cookbooks_source OpsworksStack#custom_cookbooks_source}
     */
    readonly customCookbooksSource?: OpsworksStackCustomCookbooksSource[];
}
export interface OpsworksStackCustomCookbooksSource {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#password OpsworksStack#password}.
     */
    readonly password?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#revision OpsworksStack#revision}.
     */
    readonly revision?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#ssh_key OpsworksStack#ssh_key}.
     */
    readonly sshKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#type OpsworksStack#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#url OpsworksStack#url}.
     */
    readonly url: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html#username OpsworksStack#username}.
     */
    readonly username?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack}.
 */
export declare class OpsworksStack extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_stack.html aws_opsworks_stack} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: OpsworksStackConfig);
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    resetAgentVersion(): void;
    get agentVersionInput(): string | undefined;
    get arn(): string;
    private _berkshelfVersion?;
    get berkshelfVersion(): string;
    set berkshelfVersion(value: string);
    resetBerkshelfVersion(): void;
    get berkshelfVersionInput(): string | undefined;
    private _color?;
    get color(): string;
    set color(value: string);
    resetColor(): void;
    get colorInput(): string | undefined;
    private _configurationManagerName?;
    get configurationManagerName(): string;
    set configurationManagerName(value: string);
    resetConfigurationManagerName(): void;
    get configurationManagerNameInput(): string | undefined;
    private _configurationManagerVersion?;
    get configurationManagerVersion(): string;
    set configurationManagerVersion(value: string);
    resetConfigurationManagerVersion(): void;
    get configurationManagerVersionInput(): string | undefined;
    private _customJson?;
    get customJson(): string;
    set customJson(value: string);
    resetCustomJson(): void;
    get customJsonInput(): string | undefined;
    private _defaultAvailabilityZone?;
    get defaultAvailabilityZone(): string;
    set defaultAvailabilityZone(value: string);
    resetDefaultAvailabilityZone(): void;
    get defaultAvailabilityZoneInput(): string | undefined;
    private _defaultInstanceProfileArn;
    get defaultInstanceProfileArn(): string;
    set defaultInstanceProfileArn(value: string);
    get defaultInstanceProfileArnInput(): string;
    private _defaultOs?;
    get defaultOs(): string;
    set defaultOs(value: string);
    resetDefaultOs(): void;
    get defaultOsInput(): string | undefined;
    private _defaultRootDeviceType?;
    get defaultRootDeviceType(): string;
    set defaultRootDeviceType(value: string);
    resetDefaultRootDeviceType(): void;
    get defaultRootDeviceTypeInput(): string | undefined;
    private _defaultSshKeyName?;
    get defaultSshKeyName(): string;
    set defaultSshKeyName(value: string);
    resetDefaultSshKeyName(): void;
    get defaultSshKeyNameInput(): string | undefined;
    private _defaultSubnetId?;
    get defaultSubnetId(): string;
    set defaultSubnetId(value: string);
    resetDefaultSubnetId(): void;
    get defaultSubnetIdInput(): string | undefined;
    private _hostnameTheme?;
    get hostnameTheme(): string;
    set hostnameTheme(value: string);
    resetHostnameTheme(): void;
    get hostnameThemeInput(): string | undefined;
    get id(): string;
    private _manageBerkshelf?;
    get manageBerkshelf(): boolean;
    set manageBerkshelf(value: boolean);
    resetManageBerkshelf(): void;
    get manageBerkshelfInput(): boolean | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _region;
    get region(): string;
    set region(value: string);
    get regionInput(): string;
    private _serviceRoleArn;
    get serviceRoleArn(): string;
    set serviceRoleArn(value: string);
    get serviceRoleArnInput(): string;
    get stackEndpoint(): string;
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
    private _useCustomCookbooks?;
    get useCustomCookbooks(): boolean;
    set useCustomCookbooks(value: boolean);
    resetUseCustomCookbooks(): void;
    get useCustomCookbooksInput(): boolean | undefined;
    private _useOpsworksSecurityGroups?;
    get useOpsworksSecurityGroups(): boolean;
    set useOpsworksSecurityGroups(value: boolean);
    resetUseOpsworksSecurityGroups(): void;
    get useOpsworksSecurityGroupsInput(): boolean | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _customCookbooksSource?;
    get customCookbooksSource(): OpsworksStackCustomCookbooksSource[];
    set customCookbooksSource(value: OpsworksStackCustomCookbooksSource[]);
    resetCustomCookbooksSource(): void;
    get customCookbooksSourceInput(): OpsworksStackCustomCookbooksSource[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
