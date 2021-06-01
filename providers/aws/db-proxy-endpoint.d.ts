import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbProxyEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#db_proxy_endpoint_name DbProxyEndpoint#db_proxy_endpoint_name}.
     */
    readonly dbProxyEndpointName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#db_proxy_name DbProxyEndpoint#db_proxy_name}.
     */
    readonly dbProxyName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#tags DbProxyEndpoint#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#tags_all DbProxyEndpoint#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#target_role DbProxyEndpoint#target_role}.
     */
    readonly targetRole?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#vpc_security_group_ids DbProxyEndpoint#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#vpc_subnet_ids DbProxyEndpoint#vpc_subnet_ids}.
     */
    readonly vpcSubnetIds: string[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#timeouts DbProxyEndpoint#timeouts}
     */
    readonly timeouts?: DbProxyEndpointTimeouts;
}
export interface DbProxyEndpointTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#create DbProxyEndpoint#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#delete DbProxyEndpoint#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html#update DbProxyEndpoint#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint}.
 */
export declare class DbProxyEndpoint extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_endpoint.html aws_db_proxy_endpoint} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbProxyEndpointConfig);
    get arn(): string;
    private _dbProxyEndpointName;
    get dbProxyEndpointName(): string;
    set dbProxyEndpointName(value: string);
    get dbProxyEndpointNameInput(): string;
    private _dbProxyName;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string;
    get endpoint(): string;
    get id(): string;
    get isDefault(): boolean;
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
    private _targetRole?;
    get targetRole(): string;
    set targetRole(value: string);
    resetTargetRole(): void;
    get targetRoleInput(): string | undefined;
    get vpcId(): string;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _vpcSubnetIds;
    get vpcSubnetIds(): string[];
    set vpcSubnetIds(value: string[]);
    get vpcSubnetIdsInput(): string[];
    private _timeouts?;
    get timeouts(): DbProxyEndpointTimeouts;
    set timeouts(value: DbProxyEndpointTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DbProxyEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
