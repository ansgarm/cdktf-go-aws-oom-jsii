import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailStaticIpConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html#name LightsailStaticIp#name}.
     */
    readonly name: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html aws_lightsail_static_ip}.
 */
export declare class LightsailStaticIp extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip.html aws_lightsail_static_ip} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LightsailStaticIpConfig);
    get arn(): string;
    get id(): string;
    get ipAddress(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get supportCode(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
