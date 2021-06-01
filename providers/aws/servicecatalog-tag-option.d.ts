import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogTagOptionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html#active ServicecatalogTagOption#active}.
     */
    readonly active?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html#key ServicecatalogTagOption#key}.
     */
    readonly key: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html#value ServicecatalogTagOption#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html aws_servicecatalog_tag_option}.
 */
export declare class ServicecatalogTagOption extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option.html aws_servicecatalog_tag_option} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: ServicecatalogTagOptionConfig);
    private _active?;
    get active(): boolean;
    set active(value: boolean);
    resetActive(): void;
    get activeInput(): boolean | undefined;
    get id(): string;
    private _key;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    get owner(): string;
    private _value;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
