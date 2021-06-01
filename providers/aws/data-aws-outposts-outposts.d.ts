import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOutpostsOutpostsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#availability_zone DataAwsOutpostsOutposts#availability_zone}.
     */
    readonly availabilityZone?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#availability_zone_id DataAwsOutpostsOutposts#availability_zone_id}.
     */
    readonly availabilityZoneId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html#site_id DataAwsOutpostsOutposts#site_id}.
     */
    readonly siteId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html aws_outposts_outposts}.
 */
export declare class DataAwsOutpostsOutposts extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outposts.html aws_outposts_outposts} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsOutpostsOutpostsConfig);
    get arns(): string[];
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _availabilityZoneId?;
    get availabilityZoneId(): string;
    set availabilityZoneId(value: string);
    resetAvailabilityZoneId(): void;
    get availabilityZoneIdInput(): string | undefined;
    get id(): string;
    get ids(): string[];
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    resetSiteId(): void;
    get siteIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
