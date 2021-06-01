import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbProxyTargetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#db_cluster_identifier DbProxyTarget#db_cluster_identifier}.
     */
    readonly dbClusterIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#db_instance_identifier DbProxyTarget#db_instance_identifier}.
     */
    readonly dbInstanceIdentifier?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#db_proxy_name DbProxyTarget#db_proxy_name}.
     */
    readonly dbProxyName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html#target_group_name DbProxyTarget#target_group_name}.
     */
    readonly targetGroupName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html aws_db_proxy_target}.
 */
export declare class DbProxyTarget extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_target.html aws_db_proxy_target} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbProxyTargetConfig);
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    resetDbClusterIdentifier(): void;
    get dbClusterIdentifierInput(): string | undefined;
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    resetDbInstanceIdentifier(): void;
    get dbInstanceIdentifierInput(): string | undefined;
    private _dbProxyName;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string;
    get endpoint(): string;
    get id(): string;
    get port(): number;
    get rdsResourceId(): string;
    get targetArn(): string;
    private _targetGroupName;
    get targetGroupName(): string;
    set targetGroupName(value: string);
    get targetGroupNameInput(): string;
    get trackedClusterId(): string;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
