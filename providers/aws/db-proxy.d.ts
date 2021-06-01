import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbProxyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#debug_logging DbProxy#debug_logging}.
     */
    readonly debugLogging?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#engine_family DbProxy#engine_family}.
     */
    readonly engineFamily: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#idle_client_timeout DbProxy#idle_client_timeout}.
     */
    readonly idleClientTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#name DbProxy#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#require_tls DbProxy#require_tls}.
     */
    readonly requireTls?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#role_arn DbProxy#role_arn}.
     */
    readonly roleArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#tags DbProxy#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#tags_all DbProxy#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#vpc_security_group_ids DbProxy#vpc_security_group_ids}.
     */
    readonly vpcSecurityGroupIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#vpc_subnet_ids DbProxy#vpc_subnet_ids}.
     */
    readonly vpcSubnetIds: string[];
    /**
     * auth block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#auth DbProxy#auth}
     */
    readonly auth: DbProxyAuth[];
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#timeouts DbProxy#timeouts}
     */
    readonly timeouts?: DbProxyTimeouts;
}
export interface DbProxyAuth {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#auth_scheme DbProxy#auth_scheme}.
     */
    readonly authScheme?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#description DbProxy#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#iam_auth DbProxy#iam_auth}.
     */
    readonly iamAuth?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#secret_arn DbProxy#secret_arn}.
     */
    readonly secretArn?: string;
}
export interface DbProxyTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#create DbProxy#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#delete DbProxy#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html#update DbProxy#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html aws_db_proxy}.
 */
export declare class DbProxy extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy.html aws_db_proxy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DbProxyConfig);
    get arn(): string;
    private _debugLogging?;
    get debugLogging(): boolean;
    set debugLogging(value: boolean);
    resetDebugLogging(): void;
    get debugLoggingInput(): boolean | undefined;
    get endpoint(): string;
    private _engineFamily;
    get engineFamily(): string;
    set engineFamily(value: string);
    get engineFamilyInput(): string;
    get id(): string;
    private _idleClientTimeout?;
    get idleClientTimeout(): number;
    set idleClientTimeout(value: number);
    resetIdleClientTimeout(): void;
    get idleClientTimeoutInput(): number | undefined;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _requireTls?;
    get requireTls(): boolean;
    set requireTls(value: boolean);
    resetRequireTls(): void;
    get requireTlsInput(): boolean | undefined;
    private _roleArn;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
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
    private _vpcSubnetIds;
    get vpcSubnetIds(): string[];
    set vpcSubnetIds(value: string[]);
    get vpcSubnetIdsInput(): string[];
    private _auth;
    get auth(): DbProxyAuth[];
    set auth(value: DbProxyAuth[]);
    get authInput(): DbProxyAuth[];
    private _timeouts?;
    get timeouts(): DbProxyTimeouts;
    set timeouts(value: DbProxyTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DbProxyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
