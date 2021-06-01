import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DocdbClusterInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#apply_immediately DocdbClusterInstance#apply_immediately}.
     */
    readonly applyImmediately?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#auto_minor_version_upgrade DocdbClusterInstance#auto_minor_version_upgrade}.
     */
    readonly autoMinorVersionUpgrade?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#availability_zone DocdbClusterInstance#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#ca_cert_identifier DocdbClusterInstance#ca_cert_identifier}.
     */
    readonly caCertIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#cluster_identifier DocdbClusterInstance#cluster_identifier}.
     */
    readonly clusterIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#engine DocdbClusterInstance#engine}.
     */
    readonly engine?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#identifier DocdbClusterInstance#identifier}.
     */
    readonly identifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#identifier_prefix DocdbClusterInstance#identifier_prefix}.
     */
    readonly identifierPrefix?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#instance_class DocdbClusterInstance#instance_class}.
     */
    readonly instanceClass: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#preferred_maintenance_window DocdbClusterInstance#preferred_maintenance_window}.
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#promotion_tier DocdbClusterInstance#promotion_tier}.
     */
    readonly promotionTier?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#tags DocdbClusterInstance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#tags_all DocdbClusterInstance#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#timeouts DocdbClusterInstance#timeouts}
     */
    readonly timeouts?: DocdbClusterInstanceTimeouts;
}
export interface DocdbClusterInstanceTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#create DocdbClusterInstance#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#delete DocdbClusterInstance#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html#update DocdbClusterInstance#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html aws_docdb_cluster_instance}.
 */
export declare class DocdbClusterInstance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_cluster_instance.html aws_docdb_cluster_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DocdbClusterInstanceConfig);
    private _applyImmediately?;
    get applyImmediately(): boolean;
    set applyImmediately(value: boolean);
    resetApplyImmediately(): void;
    get applyImmediatelyInput(): boolean | undefined;
    get arn(): string;
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
    private _caCertIdentifier?;
    get caCertIdentifier(): string;
    set caCertIdentifier(value: string);
    resetCaCertIdentifier(): void;
    get caCertIdentifierInput(): string | undefined;
    private _clusterIdentifier;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string;
    get dbSubnetGroupName(): string;
    get dbiResourceId(): string;
    get endpoint(): string;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    get engineVersion(): string;
    get id(): string;
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    resetIdentifier(): void;
    get identifierInput(): string | undefined;
    private _identifierPrefix?;
    get identifierPrefix(): string;
    set identifierPrefix(value: string);
    resetIdentifierPrefix(): void;
    get identifierPrefixInput(): string | undefined;
    private _instanceClass;
    get instanceClass(): string;
    set instanceClass(value: string);
    get instanceClassInput(): string;
    get kmsKeyId(): string;
    get port(): number;
    get preferredBackupWindow(): string;
    private _preferredMaintenanceWindow?;
    get preferredMaintenanceWindow(): string;
    set preferredMaintenanceWindow(value: string);
    resetPreferredMaintenanceWindow(): void;
    get preferredMaintenanceWindowInput(): string | undefined;
    private _promotionTier?;
    get promotionTier(): number;
    set promotionTier(value: number);
    resetPromotionTier(): void;
    get promotionTierInput(): number | undefined;
    get publiclyAccessible(): boolean;
    get storageEncrypted(): boolean;
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
    get writer(): boolean;
    private _timeouts?;
    get timeouts(): DocdbClusterInstanceTimeouts;
    set timeouts(value: DocdbClusterInstanceTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DocdbClusterInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
