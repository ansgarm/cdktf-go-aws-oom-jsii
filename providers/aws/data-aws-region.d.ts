import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRegionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/region.html#endpoint DataAwsRegion#endpoint}.
     */
    readonly endpoint?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/region.html#name DataAwsRegion#name}.
     */
    readonly name?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/region.html aws_region}.
 */
export declare class DataAwsRegion extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/region.html aws_region} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsRegionConfig);
    get description(): string;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    resetEndpoint(): void;
    get endpointInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
