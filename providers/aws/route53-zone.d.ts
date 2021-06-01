import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ZoneConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#comment Route53Zone#comment}.
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#delegation_set_id Route53Zone#delegation_set_id}.
     */
    readonly delegationSetId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#force_destroy Route53Zone#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#name Route53Zone#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#tags Route53Zone#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#tags_all Route53Zone#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * vpc block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#vpc Route53Zone#vpc}
     */
    readonly vpc?: Route53ZoneVpc[];
}
export interface Route53ZoneVpc {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#vpc_id Route53Zone#vpc_id}.
     */
    readonly vpcId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html#vpc_region Route53Zone#vpc_region}.
     */
    readonly vpcRegion?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html aws_route53_zone}.
 */
export declare class Route53Zone extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_zone.html aws_route53_zone} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: Route53ZoneConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _delegationSetId?;
    get delegationSetId(): string;
    set delegationSetId(value: string);
    resetDelegationSetId(): void;
    get delegationSetIdInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean;
    set forceDestroy(value: boolean);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get nameServers(): string[];
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get zoneId(): string;
    private _vpc?;
    get vpc(): Route53ZoneVpc[];
    set vpc(value: Route53ZoneVpc[]);
    resetVpc(): void;
    get vpcInput(): Route53ZoneVpc[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
