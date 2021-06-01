import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ZoneAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html#vpc_id Route53ZoneAssociation#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html#vpc_region Route53ZoneAssociation#vpc_region}.
     */
    readonly vpcRegion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html#zone_id Route53ZoneAssociation#zone_id}.
     */
    readonly zoneId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html aws_route53_zone_association}.
 */
export declare class Route53ZoneAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_zone_association.html aws_route53_zone_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53ZoneAssociationConfig);
    get id(): string;
    get owningAccount(): string;
    private _vpcId;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _vpcRegion?;
    get vpcRegion(): string;
    set vpcRegion(value: string);
    resetVpcRegion(): void;
    get vpcRegionInput(): string | undefined;
    private _zoneId;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
