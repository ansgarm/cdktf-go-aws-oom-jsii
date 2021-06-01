import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksRdsDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html#db_password OpsworksRdsDbInstance#db_password}.
     */
    readonly dbPassword: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html#db_user OpsworksRdsDbInstance#db_user}.
     */
    readonly dbUser: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html#rds_db_instance_arn OpsworksRdsDbInstance#rds_db_instance_arn}.
     */
    readonly rdsDbInstanceArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html#stack_id OpsworksRdsDbInstance#stack_id}.
     */
    readonly stackId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html aws_opsworks_rds_db_instance}.
 */
export declare class OpsworksRdsDbInstance extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_rds_db_instance.html aws_opsworks_rds_db_instance} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: OpsworksRdsDbInstanceConfig);
    private _dbPassword;
    get dbPassword(): string;
    set dbPassword(value: string);
    get dbPasswordInput(): string;
    private _dbUser;
    get dbUser(): string;
    set dbUser(value: string);
    get dbUserInput(): string;
    get id(): string;
    private _rdsDbInstanceArn;
    get rdsDbInstanceArn(): string;
    set rdsDbInstanceArn(value: string);
    get rdsDbInstanceArnInput(): string;
    private _stackId;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
