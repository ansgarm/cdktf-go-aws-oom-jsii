import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsReplicationInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#allocated_storage DmsReplicationInstance#allocated_storage}.
     */
    readonly allocatedStorage?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#allow_major_version_upgrade DmsReplicationInstance#allow_major_version_upgrade}.
     */
    readonly allowMajorVersionUpgrade?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#apply_immediately DmsReplicationInstance#apply_immediately}.
     */
    readonly applyImmediately?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#auto_minor_version_upgrade DmsReplicationInstance#auto_minor_version_upgrade}.
     */
    readonly autoMinorVersionUpgrade?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#availability_zone DmsReplicationInstance#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#engine_version DmsReplicationInstance#engine_version}.
     */
    readonly engineVersion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#kms_key_arn DmsReplicationInstance#kms_key_arn}.
     */
    readonly kmsKeyArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#multi_az DmsReplicationInstance#multi_az}.
     */
    readonly multiAz?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#preferred_maintenance_window DmsReplicationInstance#preferred_maintenance_window}.
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#publicly_accessible DmsReplicationInstance#publicly_accessible}.
     */
    readonly publiclyAccessible?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#replication_instance_class DmsReplicationInstance#replication_instance_class}.
     */
    readonly replicationInstanceClass: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#replication_instance_id DmsReplicationInstance#replication_instance_id}.
     */
    readonly replicationInstanceId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#replication_subnet_group_id DmsReplicationInstance#replication_subnet_group_id}.
     */
    readonly replicationSubnetGroupId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#tags DmsReplicationInstance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#tags_all DmsReplicationInstance#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#vpc_security_group_ids DmsReplicationInstance#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#timeouts DmsReplicationInstance#timeouts}
     */
    readonly timeouts?: DmsReplicationInstanceTimeouts;
}
export interface DmsReplicationInstanceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#create DmsReplicationInstance#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#delete DmsReplicationInstance#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html#update DmsReplicationInstance#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html aws_dms_replication_instance}.
 */
export declare class DmsReplicationInstance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dms_replication_instance.html aws_dms_replication_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DmsReplicationInstanceConfig);
    private _allocatedStorage?;
    get allocatedStorage(): number;
    set allocatedStorage(value: number);
    resetAllocatedStorage(): void;
    get allocatedStorageInput(): number | undefined;
    private _allowMajorVersionUpgrade?;
    get allowMajorVersionUpgrade(): boolean;
    set allowMajorVersionUpgrade(value: boolean);
    resetAllowMajorVersionUpgrade(): void;
    get allowMajorVersionUpgradeInput(): boolean | undefined;
    private _applyImmediately?;
    get applyImmediately(): boolean;
    set applyImmediately(value: boolean);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | undefined;
    private _autoMinorVersionUpgrade?;
    get autoMinorVersionUpgrade(): boolean;
    set autoMinorVersionUpgrade(value: boolean);
    resetAutoMinorVersionUpgrade(): void;
    get autoMinorVersionUpgradeInput(): boolean | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    get id(): string;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _multiAz?;
    get multiAz(): boolean;
    set multiAz(value: boolean);
    resetMultiAz(): void;
    get multiAzInput(): boolean | undefined;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string | undefined;
    private _publiclyAccessible?;
    get publiclyAccessible(): boolean;
    set publiclyAccessible(value: boolean);
    resetPubliclyAccessible(): void;
    get publiclyAccessibleInput(): boolean | undefined;
    get replicationInstanceArn(): string;
    private _replicationInstanceClass;
    get replicationInstanceClass(): string;
    set replicationInstanceClass(value: string);
    get replicationInstanceClassInput(): string;
    private _replicationInstanceId;
    get replicationInstanceId(): string;
    set replicationInstanceId(value: string);
    get replicationInstanceIdInput(): string;
    get replicationInstancePrivateIps(): string[];
    get replicationInstancePublicIps(): string[];
    private _replicationSubnetGroupId?;
    get replicationSubnetGroupId(): string;
    set replicationSubnetGroupId(value: string);
    resetReplicationSubnetGroupId(): void;
    get replicationSubnetGroupIdInput(): string | undefined;
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
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _timeouts?;
    get timeouts(): DmsReplicationInstanceTimeouts;
    set timeouts(value: DmsReplicationInstanceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DmsReplicationInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
