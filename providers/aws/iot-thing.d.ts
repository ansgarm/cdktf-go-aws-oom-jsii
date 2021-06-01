import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotThingConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html#attributes IotThing#attributes}.
     */
    readonly attributes?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html#name IotThing#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html#thing_type_name IotThing#thing_type_name}.
     */
    readonly thingTypeName?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html aws_iot_thing}.
 */
export declare class IotThing extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html aws_iot_thing} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IotThingConfig);
    get arn(): string;
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    };
    set attributes(value: {
        [key: string]: string;
    });
    resetAttributes(): void;
    get attributesInput(): {
        [key: string]: string;
    } | undefined;
    get defaultClientId(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _thingTypeName?;
    get thingTypeName(): string;
    set thingTypeName(value: string);
    resetThingTypeName(): void;
    get thingTypeNameInput(): string | undefined;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
