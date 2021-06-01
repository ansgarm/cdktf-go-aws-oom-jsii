import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcPeeringConnectionsConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#tags DataAwsVpcPeeringConnections#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#filter DataAwsVpcPeeringConnections#filter}
     */
    readonly filter?: DataAwsVpcPeeringConnectionsFilter[];
}
export interface DataAwsVpcPeeringConnectionsFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#name DataAwsVpcPeeringConnections#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html#values DataAwsVpcPeeringConnections#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html aws_vpc_peering_connections}.
 */
export declare class DataAwsVpcPeeringConnections extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_peering_connections.html aws_vpc_peering_connections} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsVpcPeeringConnectionsConfig);
    get id(): string;
    get ids(): string[];
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
    private _filter?;
    get filter(): DataAwsVpcPeeringConnectionsFilter[];
    set filter(value: DataAwsVpcPeeringConnectionsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcPeeringConnectionsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
