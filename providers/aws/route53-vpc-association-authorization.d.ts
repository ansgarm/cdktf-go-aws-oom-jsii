import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53VpcAssociationAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html#vpc_id Route53VpcAssociationAuthorization#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html#vpc_region Route53VpcAssociationAuthorization#vpc_region}.
     */
    readonly vpcRegion?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html#zone_id Route53VpcAssociationAuthorization#zone_id}.
     */
    readonly zoneId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html aws_route53_vpc_association_authorization}.
 */
export declare class Route53VpcAssociationAuthorization extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_vpc_association_authorization.html aws_route53_vpc_association_authorization} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53VpcAssociationAuthorizationConfig);
    get id(): string;
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
