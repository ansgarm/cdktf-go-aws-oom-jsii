import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbProxyDefaultTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}.
     */
    readonly dbProxyName: string;
    /**
     * connection_pool_config block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}
     */
    readonly connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#timeouts DbProxyDefaultTargetGroup#timeouts}
     */
    readonly timeouts?: DbProxyDefaultTargetGroupTimeouts;
}
export interface DbProxyDefaultTargetGroupConnectionPoolConfig {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}.
     */
    readonly connectionBorrowTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#init_query DbProxyDefaultTargetGroup#init_query}.
     */
    readonly initQuery?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}.
     */
    readonly maxConnectionsPercent?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}.
     */
    readonly maxIdleConnectionsPercent?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}.
     */
    readonly sessionPinningFilters?: string[];
}
export interface DbProxyDefaultTargetGroupTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#create DbProxyDefaultTargetGroup#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#update DbProxyDefaultTargetGroup#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group}.
 */
export declare class DbProxyDefaultTargetGroup extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbProxyDefaultTargetGroupConfig);
    get arn(): string;
    private _dbProxyName;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string;
    get id(): string;
    get name(): string;
    private _connectionPoolConfig?;
    get connectionPoolConfig(): DbProxyDefaultTargetGroupConnectionPoolConfig[];
    set connectionPoolConfig(value: DbProxyDefaultTargetGroupConnectionPoolConfig[]);
    resetConnectionPoolConfig(): void;
    get connectionPoolConfigInput(): DbProxyDefaultTargetGroupConnectionPoolConfig[] | undefined;
    private _timeouts?;
    get timeouts(): DbProxyDefaultTargetGroupTimeouts;
    set timeouts(value: DbProxyDefaultTargetGroupTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DbProxyDefaultTargetGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
