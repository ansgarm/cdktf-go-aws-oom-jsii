import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafGeoMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#name WafGeoMatchSet#name}.
     */
    readonly name: string;
    /**
     * geo_match_constraint block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#geo_match_constraint WafGeoMatchSet#geo_match_constraint}
     */
    readonly geoMatchConstraint?: WafGeoMatchSetGeoMatchConstraint[];
}
export interface WafGeoMatchSetGeoMatchConstraint {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#type WafGeoMatchSet#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html#value WafGeoMatchSet#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html aws_waf_geo_match_set}.
 */
export declare class WafGeoMatchSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/waf_geo_match_set.html aws_waf_geo_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafGeoMatchSetConfig);
    get arn(): string;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _geoMatchConstraint?;
    get geoMatchConstraint(): WafGeoMatchSetGeoMatchConstraint[];
    set geoMatchConstraint(value: WafGeoMatchSetGeoMatchConstraint[]);
    resetGeoMatchConstraint(): void;
    get geoMatchConstraintInput(): WafGeoMatchSetGeoMatchConstraint[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
