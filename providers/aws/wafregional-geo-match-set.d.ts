import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafregionalGeoMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html#name WafregionalGeoMatchSet#name}.
     */
    readonly name: string;
    /**
     * geo_match_constraint block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html#geo_match_constraint WafregionalGeoMatchSet#geo_match_constraint}
     */
    readonly geoMatchConstraint?: WafregionalGeoMatchSetGeoMatchConstraint[];
}
export interface WafregionalGeoMatchSetGeoMatchConstraint {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html#type WafregionalGeoMatchSet#type}.
     */
    readonly type: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html#value WafregionalGeoMatchSet#value}.
     */
    readonly value: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html aws_wafregional_geo_match_set}.
 */
export declare class WafregionalGeoMatchSet extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html aws_wafregional_geo_match_set} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: WafregionalGeoMatchSetConfig);
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _geoMatchConstraint?;
    get geoMatchConstraint(): WafregionalGeoMatchSetGeoMatchConstraint[];
    set geoMatchConstraint(value: WafregionalGeoMatchSetGeoMatchConstraint[]);
    resetGeoMatchConstraint(): void;
    get geoMatchConstraintInput(): WafregionalGeoMatchSetGeoMatchConstraint[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
