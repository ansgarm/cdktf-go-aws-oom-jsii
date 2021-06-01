import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncAgentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#activation_key DatasyncAgent#activation_key}.
     */
    readonly activationKey?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#ip_address DatasyncAgent#ip_address}.
     */
    readonly ipAddress?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#name DatasyncAgent#name}.
     */
    readonly name?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#private_link_endpoint DatasyncAgent#private_link_endpoint}.
     */
    readonly privateLinkEndpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#security_group_arns DatasyncAgent#security_group_arns}.
     */
    readonly securityGroupArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#subnet_arns DatasyncAgent#subnet_arns}.
     */
    readonly subnetArns?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#tags DatasyncAgent#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#tags_all DatasyncAgent#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#vpc_endpoint_id DatasyncAgent#vpc_endpoint_id}.
     */
    readonly vpcEndpointId?: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#timeouts DatasyncAgent#timeouts}
     */
    readonly timeouts?: DatasyncAgentTimeouts;
}
export interface DatasyncAgentTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#create DatasyncAgent#create}.
     */
    readonly create?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html aws_datasync_agent}.
 */
export declare class DatasyncAgent extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html aws_datasync_agent} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DatasyncAgentConfig);
    private _activationKey?;
    get activationKey(): string;
    set activationKey(value: string);
    resetActivationKey(): void;
    get activationKeyInput(): string | undefined;
    get arn(): string;
    get id(): string;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _privateLinkEndpoint?;
    get privateLinkEndpoint(): string;
    set privateLinkEndpoint(value: string);
    resetPrivateLinkEndpoint(): void;
    get privateLinkEndpointInput(): string | undefined;
    private _securityGroupArns?;
    get securityGroupArns(): string[];
    set securityGroupArns(value: string[]);
    resetSecurityGroupArns(): void;
    get securityGroupArnsInput(): string[] | undefined;
    private _subnetArns?;
    get subnetArns(): string[];
    set subnetArns(value: string[]);
    resetSubnetArns(): void;
    get subnetArnsInput(): string[] | undefined;
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
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    resetVpcEndpointId(): void;
    get vpcEndpointIdInput(): string | undefined;
    private _timeouts?;
    get timeouts(): DatasyncAgentTimeouts;
    set timeouts(value: DatasyncAgentTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DatasyncAgentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
