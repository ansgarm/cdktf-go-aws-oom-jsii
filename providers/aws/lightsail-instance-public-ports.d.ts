import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailInstancePublicPortsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#instance_name LightsailInstancePublicPorts#instance_name}.
     */
    readonly instanceName: string;
    /**
     * port_info block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#port_info LightsailInstancePublicPorts#port_info}
     */
    readonly portInfo: LightsailInstancePublicPortsPortInfo[];
}
export interface LightsailInstancePublicPortsPortInfo {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#cidrs LightsailInstancePublicPorts#cidrs}.
     */
    readonly cidrs?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#from_port LightsailInstancePublicPorts#from_port}.
     */
    readonly fromPort: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#protocol LightsailInstancePublicPorts#protocol}.
     */
    readonly protocol: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html#to_port LightsailInstancePublicPorts#to_port}.
     */
    readonly toPort: number;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports}.
 */
export declare class LightsailInstancePublicPorts extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance_public_ports.html aws_lightsail_instance_public_ports} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LightsailInstancePublicPortsConfig);
    get id(): string;
    private _instanceName;
    get instanceName(): string;
    set instanceName(value: string);
    get instanceNameInput(): string;
    private _portInfo;
    get portInfo(): LightsailInstancePublicPortsPortInfo[];
    set portInfo(value: LightsailInstancePublicPortsPortInfo[]);
    get portInfoInput(): LightsailInstancePublicPortsPortInfo[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
