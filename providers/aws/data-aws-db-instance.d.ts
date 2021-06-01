import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html#db_instance_identifier DataAwsDbInstance#db_instance_identifier}.
     */
    readonly dbInstanceIdentifier: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html#tags DataAwsDbInstance#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html aws_db_instance}.
 */
export declare class DataAwsDbInstance extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_instance.html aws_db_instance} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsDbInstanceConfig);
    get address(): string;
    get allocatedStorage(): number;
    get autoMinorVersionUpgrade(): boolean;
    get availabilityZone(): string;
    get backupRetentionPeriod(): number;
    get caCertIdentifier(): string;
    get dbClusterIdentifier(): string;
    get dbInstanceArn(): string;
    get dbInstanceClass(): string;
    private _dbInstanceIdentifier;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    get dbInstanceIdentifierInput(): string;
    get dbInstancePort(): number;
    get dbName(): string;
    get dbParameterGroups(): string[];
    get dbSecurityGroups(): string[];
    get dbSubnetGroup(): string;
    get enabledCloudwatchLogsExports(): string[];
    get endpoint(): string;
    get engine(): string;
    get engineVersion(): string;
    get hostedZoneId(): string;
    get id(): string;
    get iops(): number;
    get kmsKeyId(): string;
    get licenseModel(): string;
    get masterUsername(): string;
    get monitoringInterval(): number;
    get monitoringRoleArn(): string;
    get multiAz(): boolean;
    get optionGroupMemberships(): string[];
    get port(): number;
    get preferredBackupWindow(): string;
    get preferredMaintenanceWindow(): string;
    get publiclyAccessible(): boolean;
    get replicateSourceDb(): string;
    get resourceId(): string;
    get storageEncrypted(): boolean;
    get storageType(): string;
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
    get timezone(): string;
    get vpcSecurityGroups(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
