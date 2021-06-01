import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailStaticIpAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html#instance_name LightsailStaticIpAttachment#instance_name}.
     */
    readonly instanceName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html#static_ip_name LightsailStaticIpAttachment#static_ip_name}.
     */
    readonly staticIpName: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html aws_lightsail_static_ip_attachment}.
 */
export declare class LightsailStaticIpAttachment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_static_ip_attachment.html aws_lightsail_static_ip_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LightsailStaticIpAttachmentConfig);
    get id(): string;
    private _instanceName;
    get instanceName(): string;
    set instanceName(value: string);
    get instanceNameInput(): string;
    get ipAddress(): string;
    private _staticIpName;
    get staticIpName(): string;
    set staticIpName(value: string);
    get staticIpNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
