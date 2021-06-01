import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotThingTypeConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#deprecated IotThingType#deprecated}.
     */
    readonly deprecated?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#name IotThingType#name}.
     */
    readonly name: string;
    /**
     * properties block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#properties IotThingType#properties}
     */
    readonly properties?: IotThingTypeProperties[];
}
export interface IotThingTypeProperties {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#description IotThingType#description}.
     */
    readonly description?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#searchable_attributes IotThingType#searchable_attributes}.
     */
    readonly searchableAttributes?: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html aws_iot_thing_type}.
 */
export declare class IotThingType extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html aws_iot_thing_type} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: IotThingTypeConfig);
    get arn(): string;
    private _deprecated?;
    get deprecated(): boolean;
    set deprecated(value: boolean);
    resetDeprecated(): void;
    get deprecatedInput(): boolean | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _properties?;
    get properties(): IotThingTypeProperties[];
    set properties(value: IotThingTypeProperties[]);
    resetProperties(): void;
    get propertiesInput(): IotThingTypeProperties[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
