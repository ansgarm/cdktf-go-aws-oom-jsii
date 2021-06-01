import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MqBrokerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#apply_immediately MqBroker#apply_immediately}.
     */
    readonly applyImmediately?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#authentication_strategy MqBroker#authentication_strategy}.
     */
    readonly authenticationStrategy?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#auto_minor_version_upgrade MqBroker#auto_minor_version_upgrade}.
     */
    readonly autoMinorVersionUpgrade?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#broker_name MqBroker#broker_name}.
     */
    readonly brokerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#deployment_mode MqBroker#deployment_mode}.
     */
    readonly deploymentMode?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#engine_type MqBroker#engine_type}.
     */
    readonly engineType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#engine_version MqBroker#engine_version}.
     */
    readonly engineVersion: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#host_instance_type MqBroker#host_instance_type}.
     */
    readonly hostInstanceType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#publicly_accessible MqBroker#publicly_accessible}.
     */
    readonly publiclyAccessible?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#security_groups MqBroker#security_groups}.
     */
    readonly securityGroups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#storage_type MqBroker#storage_type}.
     */
    readonly storageType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#subnet_ids MqBroker#subnet_ids}.
     */
    readonly subnetIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#tags MqBroker#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#tags_all MqBroker#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#configuration MqBroker#configuration}
     */
    readonly configuration?: MqBrokerConfiguration[];
    /**
     * encryption_options block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#encryption_options MqBroker#encryption_options}
     */
    readonly encryptionOptions?: MqBrokerEncryptionOptions[];
    /**
     * ldap_server_metadata block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#ldap_server_metadata MqBroker#ldap_server_metadata}
     */
    readonly ldapServerMetadata?: MqBrokerLdapServerMetadata[];
    /**
     * logs block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#logs MqBroker#logs}
     */
    readonly logs?: MqBrokerLogs[];
    /**
     * maintenance_window_start_time block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#maintenance_window_start_time MqBroker#maintenance_window_start_time}
     */
    readonly maintenanceWindowStartTime?: MqBrokerMaintenanceWindowStartTime[];
    /**
     * user block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user MqBroker#user}
     */
    readonly user: MqBrokerUser[];
}
export declare class MqBrokerInstances extends cdktf.ComplexComputedList {
    get consoleUrl(): string;
    get endpoints(): string[];
    get ipAddress(): string;
}
export interface MqBrokerConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#id MqBroker#id}.
     */
    readonly id?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#revision MqBroker#revision}.
     */
    readonly revision?: number;
}
export interface MqBrokerEncryptionOptions {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#kms_key_id MqBroker#kms_key_id}.
     */
    readonly kmsKeyId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#use_aws_owned_key MqBroker#use_aws_owned_key}.
     */
    readonly useAwsOwnedKey?: boolean;
}
export interface MqBrokerLdapServerMetadata {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#hosts MqBroker#hosts}.
     */
    readonly hosts?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_base MqBroker#role_base}.
     */
    readonly roleBase?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_name MqBroker#role_name}.
     */
    readonly roleName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_search_matching MqBroker#role_search_matching}.
     */
    readonly roleSearchMatching?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#role_search_subtree MqBroker#role_search_subtree}.
     */
    readonly roleSearchSubtree?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#service_account_password MqBroker#service_account_password}.
     */
    readonly serviceAccountPassword?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#service_account_username MqBroker#service_account_username}.
     */
    readonly serviceAccountUsername?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_base MqBroker#user_base}.
     */
    readonly userBase?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_role_name MqBroker#user_role_name}.
     */
    readonly userRoleName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_search_matching MqBroker#user_search_matching}.
     */
    readonly userSearchMatching?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#user_search_subtree MqBroker#user_search_subtree}.
     */
    readonly userSearchSubtree?: boolean;
}
export interface MqBrokerLogs {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#audit MqBroker#audit}.
     */
    readonly audit?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#general MqBroker#general}.
     */
    readonly general?: boolean;
}
export interface MqBrokerMaintenanceWindowStartTime {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#day_of_week MqBroker#day_of_week}.
     */
    readonly dayOfWeek: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#time_of_day MqBroker#time_of_day}.
     */
    readonly timeOfDay: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#time_zone MqBroker#time_zone}.
     */
    readonly timeZone: string;
}
export interface MqBrokerUser {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#console_access MqBroker#console_access}.
     */
    readonly consoleAccess?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#groups MqBroker#groups}.
     */
    readonly groups?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#password MqBroker#password}.
     */
    readonly password: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html#username MqBroker#username}.
     */
    readonly username: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker}.
 */
export declare class MqBroker extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mq_broker.html aws_mq_broker} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: MqBrokerConfig);
    private _applyImmediately?;
    get applyImmediately(): boolean;
    set applyImmediately(value: boolean);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | undefined;
    get arn(): string;
    private _authenticationStrategy?;
    get authenticationStrategy(): string;
    set authenticationStrategy(value: string);
    resetAuthenticationStrategy(): void;
    get authenticationStrategyInput(): string | undefined;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean;
    set autoMinorVersionUpgrade(value: boolean);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | undefined;
    private _brokerName;
    get brokerName(): string;
    set brokerName(value: string);
    get brokerNameInput(): string;
    private _deploymentMode?;
    get deploymentMode(): string;
    set deploymentMode(value: string);
    resetDeploymentMode(): void;
    get deploymentModeInput(): string | undefined;
    private _engineType;
    get engineType(): string;
    set engineType(value: string);
    get engineTypeInput(): string;
    private _engineVersion;
    get engineVersion(): string;
    set engineVersion(value: string);
    get engineVersionInput(): string;
    private _hostInstanceType;
    get hostInstanceType(): string;
    set hostInstanceType(value: string);
    get hostInstanceTypeInput(): string;
    get id(): string;
    instances(index: string): MqBrokerInstances;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean;
    set publiclyAccessible(value: boolean);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _configuration?;
    get configuration(): MqBrokerConfiguration[];
    set configuration(value: MqBrokerConfiguration[]);
    resetConfiguration(): void;
    get configurationInput(): MqBrokerConfiguration[] | undefined;
    private _encryptionOptions?;
    get encryptionOptions(): MqBrokerEncryptionOptions[];
    set encryptionOptions(value: MqBrokerEncryptionOptions[]);
    resetEncryptionOptions(): void;
    get encryptionOptionsInput(): MqBrokerEncryptionOptions[] | undefined;
    private _ldapServerMetadata?;
    get ldapServerMetadata(): MqBrokerLdapServerMetadata[];
    set ldapServerMetadata(value: MqBrokerLdapServerMetadata[]);
    resetLdapServerMetadata(): void;
    get ldapServerMetadataInput(): MqBrokerLdapServerMetadata[] | undefined;
    private _logs?;
    get logs(): MqBrokerLogs[];
    set logs(value: MqBrokerLogs[]);
    resetLogs(): void;
    get logsInput(): MqBrokerLogs[] | undefined;
    private _maintenanceWindowStartTime?;
    get maintenanceWindowStartTime(): MqBrokerMaintenanceWindowStartTime[];
    set maintenanceWindowStartTime(value: MqBrokerMaintenanceWindowStartTime[]);
    resetMaintenanceWindowStartTime(): void;
    get maintenanceWindowStartTimeInput(): MqBrokerMaintenanceWindowStartTime[] | undefined;
    private _user;
    get user(): MqBrokerUser[];
    set user(value: MqBrokerUser[]);
    get userInput(): MqBrokerUser[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
