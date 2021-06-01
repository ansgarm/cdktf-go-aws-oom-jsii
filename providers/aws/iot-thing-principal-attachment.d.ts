import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotThingPrincipalAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html#principal IotThingPrincipalAttachment#principal}.
     */
    readonly principal: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html#thing IotThingPrincipalAttachment#thing}.
     */
    readonly thing: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html aws_iot_thing_principal_attachment}.
 */
export declare class IotThingPrincipalAttachment extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html aws_iot_thing_principal_attachment} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IotThingPrincipalAttachmentConfig);
    get id(): string;
    private _principal;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _thing;
    get thing(): string;
    set thing(value: string);
    get thingInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
